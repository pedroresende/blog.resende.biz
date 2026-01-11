export default defineEventHandler(async (event) => {
  try {
    const posts: {
      id: string
      title: string
      date: string
      author: {
        name: string
      }
      guid: string
      permalink: string
      categories: string
      path: string
      description: string
      content: string
    }[] = await queryCollection(event, "content").all()

    const formattedPosts = posts.map((post) => ({
      path: post.path,
      title: post.title,
      description: post.description,
      content: post.content?.replace(/<[^>]*>/g, "") || ""
    }))

    return {
      data: formattedPosts,
      total: formattedPosts.length
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch posts for search"
    })
  }
})
