export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');

    // Mock role deletion - replace with actual database delete
    // In a real application, you might want to check if role is in use before deletion

    return {
      statusCode: 200,
      message: 'Role deleted successfully'
    };
  } catch (error) {
    return {
      statusCode: 500,
      error: 'Internal Server Error',
      message: error.message
    };
  }
});
