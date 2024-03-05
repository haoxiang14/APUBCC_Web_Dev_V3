import { Client } from "@notionhq/client";
const { NOTION_KEY, NOTION_TEAM_DB } = process.env;

const notion = new Client({ auth: NOTION_KEY });

export default defineEventHandler(async (event) => {
    const { results } = await notion.databases.query({
        database_id: NOTION_TEAM_DB,
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
        const linkedInUrl = page.properties["LinkedIn URL"].url || "";
        const twitterUrl = page.properties["Twitter URL"].url || "";
        const department = page.properties.Department.multi_select.map(
            (option) => option.name
        );
        const imageUrl = imageBlocks[0]?.image?.file?.url || "";

        if (linkedInUrl || twitterUrl) {
            finalResults.push({
                title,
                imageUrl,
                linkedInUrl,
                twitterUrl,
                department,
            });
        }
    });

    await Promise.allSettled(imageBlocksPromises);
    finalResults.sort((a, b) => a.title.localeCompare(b.title));
    return {
        results: finalResults,
        lead: finalResults.filter((result) =>
            result.department.includes("Lead")
        ),
        events: finalResults.filter((result) =>
            result.department.includes("Event")
        ),
        marketing: finalResults.filter((result) =>
            result.department.includes("Marketing")
        ),
        community: finalResults.filter((result) =>
            result.department.includes("Community")
        ),
        bootcamp: finalResults.filter((result) =>
            result.department.includes("Bootcamp")
        ),
        pr: finalResults.filter((result) =>
            result.department.includes("External Relations")
        ),
        secretary: finalResults.filter((result) =>
            result.department.includes("Secretary")
        ),
        treasurer: finalResults.filter((result) =>
            result.department.includes("Treasurer")
        ),
        production: finalResults.filter((result) =>
            result.department.includes("Production")
        ),
    };
});