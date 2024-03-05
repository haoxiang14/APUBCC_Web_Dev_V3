import { Client } from "@notionhq/client";
const { NOTION_KEY, NOTION_EVENT_DB } = process.env;

const notion = new Client({ auth: NOTION_KEY });

export default defineEventHandler(async (event) => {
	const { results, next_cursor, has_more } = await notion.databases.query({
		database_id: NOTION_EVENT_DB,
		filter: {
			property: "Status",
			select: {
				equals: "Up Coming",
			},
		},
	});

	const finalResults = [];

	// Fetch block children (potential images) for each page
	const imageBlocksPromises = results.map(async (page) => {
		const blockChildren = await notion.blocks.children.list({
			block_id: page.id,
		});

		// Filter for image blocks
		const imageBlocks = blockChildren.results.filter(
			(block) => block.type === "image"
		);

		// Extract the title, date, and image URL
		const title = page.properties.Name.title[0]?.plain_text || "";
		const date = page.properties["Event Date"].date.start;
		const imageUrl = imageBlocks[0]?.image?.file?.url || "";
        const eventUrl = page.properties["URL"].url || "";

		// Add to final results
		finalResults.push({ title, date, imageUrl, eventUrl });
	});

	await Promise.allSettled(imageBlocksPromises);
	finalResults.sort((a, b) => new Date(b.date) - new Date(a.date));

	return {
		results: finalResults,
	};
});