# User Management Module

This module provides comprehensive user and role management functionality for the ACM DHCV application.

## Features

### User Management
- **List Users**: View all users with pagination, search, and filtering
- **Add User**: Create new users with username, email, name, password, and role assignment
- **Edit User**: Update user information including role changes
- **Delete User**: Remove users from the system
- **User Status**: Enable/disable user accounts

### Role Management
- **List Roles**: View all roles with their permissions
- **Add Role**: Create new roles with custom permission sets
- **Edit Role**: Update role information and permissions
- **Delete Role**: Remove roles from the system
- **Permission Management**: Granular permission control across different modules

## Navigation

The User Management section is accessible from the main navigation menu under "User Management" with two sub-sections:
- **Users** (`/UserManagement/users`) - User management interface
- **Roles** (`/UserManagement/roles`) - Role management interface

## API Endpoints

### Users API
- `GET /api/users` - List users with pagination and search
- `POST /api/users` - Create a new user
- `GET /api/users/[id]` - Get user by ID
- `PUT /api/users/[id]` - Update user
- `DELETE /api/users/[id]` - Delete user

### Roles API
- `GET /api/roles` - List roles with pagination and search
- `POST /api/roles` - Create a new role
- `GET /api/roles/[id]` - Get role by ID
- `PUT /api/roles/[id]` - Update role
- `DELETE /api/roles/[id]` - Delete role

## Data Models

### User Model
```typescript
interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  roleId: string;
  role?: Role;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### Role Model
```typescript
interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

## Permission System

The role-based access control system includes permissions for:

### User Management
- `users.create` - Create users
- `users.read` - View users
- `users.update` - Edit users
- `users.delete` - Delete users

### Role Management
- `roles.create` - Create roles
- `roles.read` - View roles
- `roles.update` - Edit roles
- `roles.delete` - Delete roles

### Business Modules
- **Sales**: `sales.create`, `sales.read`, `sales.update`, `sales.delete`
- **Procurement**: `procurement.create`, `procurement.read`, `procurement.update`, `procurement.delete`
- **Finance**: `finance.create`, `finance.read`, `finance.update`, `finance.delete`
- **Reports**: `reports.read`, `reports.export`

## Usage

### Using the Composable
```javascript
import { useUserManagement } from '~/composables/useUserManagement';

const { fetchUsers, createUser, loading } = useUserManagement();

// Fetch users
const users = await fetchUsers({ search: 'john', page: 1, limit: 10 });

// Create user
const newUser = await createUser({
  username: 'johndoe',
  email: 'john@example.com',
  firstName: 'John',
  lastName: 'Doe',
  password: 'password123',
  roleId: '1',
  isActive: true
});
```

## Security Considerations

- Passwords are not returned in API responses
- User deletion should be implemented as soft delete in production
- Role deletion should check for existing users before allowing deletion
- All API endpoints should include proper authentication and authorization
- Input validation is implemented on both frontend and backend

## Future Enhancements

- Password reset functionality
- User profile management
- Audit logging for user and role changes
- Bulk user operations
- Advanced role inheritance
- Two-factor authentication support
