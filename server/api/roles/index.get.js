export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const search = query.search || '';

    // Mock data - replace with actual database queries
    const mockRoles = [
      {
        id: '1',
        name: 'Administrator',
        description: 'Full system access with all permissions',
        permissions: ['users.create', 'users.read', 'users.update', 'users.delete', 'roles.create', 'roles.read', 'roles.update', 'roles.delete'],
        isActive: true,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
      },
      {
        id: '2',
        name: 'Manager',
        description: 'Management access with limited permissions',
        permissions: ['users.read', 'users.update', 'roles.read'],
        isActive: true,
        createdAt: new Date('2024-01-02'),
        updatedAt: new Date('2024-01-02')
      },
      {
        id: '3',
        name: 'User',
        description: 'Basic user access with read-only permissions',
        permissions: ['users.read'],
        isActive: true,
        createdAt: new Date('2024-01-03'),
        updatedAt: new Date('2024-01-03')
      }
    ];

    // Filter roles based on search
    let filteredRoles = mockRoles;
    if (search) {
      filteredRoles = mockRoles.filter(role => 
        role.name.toLowerCase().includes(search.toLowerCase()) ||
        role.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedRoles = filteredRoles.slice(startIndex, endIndex);

    return {
      statusCode: 200,
      data: {
        roles: paginatedRoles,
        total: filteredRoles.length,
        page,
        limit
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      error: 'Internal Server Error',
      message: error.message
    };
  }
});
