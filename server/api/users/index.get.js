export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const search = query.search || '';

    // Mock data - replace with actual database queries
    const mockUsers = [
      {
        id: '1',
        username: 'admin',
        email: 'admin@example.com',
        firstName: 'Admin',
        lastName: 'User',
        roleId: '1',
        role: {
          id: '1',
          name: 'Administrator',
          description: 'Full system access'
        },
        isActive: true,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
      },
      {
        id: '2',
        username: 'manager',
        email: 'manager@example.com',
        firstName: 'Manager',
        lastName: 'User',
        roleId: '2',
        role: {
          id: '2',
          name: 'Manager',
          description: 'Management access'
        },
        isActive: true,
        createdAt: new Date('2024-01-02'),
        updatedAt: new Date('2024-01-02')
      },
      {
        id: '3',
        username: 'user',
        email: 'user@example.com',
        firstName: 'Regular',
        lastName: 'User',
        roleId: '3',
        role: {
          id: '3',
          name: 'User',
          description: 'Basic user access'
        },
        isActive: true,
        createdAt: new Date('2024-01-03'),
        updatedAt: new Date('2024-01-03')
      }
    ];

    // Filter users based on search
    let filteredUsers = mockUsers;
    if (search) {
      filteredUsers = mockUsers.filter(user => 
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    return {
      statusCode: 200,
      data: {
        users: paginatedUsers,
        total: filteredUsers.length,
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
