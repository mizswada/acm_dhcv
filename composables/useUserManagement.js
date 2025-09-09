export const useUserManagement = () => {
  const loading = ref(false);

  const fetchUsers = async (params = {}) => {
    try {
      loading.value = true;
      const { data } = await $fetch('/api/users', {
        query: {
          search: params.search || '',
          page: params.page || 1,
          limit: params.limit || 10
        }
      });
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const createUser = async (userData) => {
    try {
      loading.value = true;
      const { data } = await $fetch('/api/users', {
        method: 'POST',
        body: userData
      });
      return data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const updateUser = async (id, userData) => {
    try {
      loading.value = true;
      const { data } = await $fetch(`/api/users/${id}`, {
        method: 'PUT',
        body: userData
      });
      return data;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const deleteUser = async (id) => {
    try {
      loading.value = true;
      await $fetch(`/api/users/${id}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const fetchRoles = async (params = {}) => {
    try {
      loading.value = true;
      const { data } = await $fetch('/api/roles', {
        query: {
          search: params.search || '',
          page: params.page || 1,
          limit: params.limit || 10
        }
      });
      return data;
    } catch (error) {
      console.error('Error fetching roles:', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const createRole = async (roleData) => {
    try {
      loading.value = true;
      const { data } = await $fetch('/api/roles', {
        method: 'POST',
        body: roleData
      });
      return data;
    } catch (error) {
      console.error('Error creating role:', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const updateRole = async (id, roleData) => {
    try {
      loading.value = true;
      const { data } = await $fetch(`/api/roles/${id}`, {
        method: 'PUT',
        body: roleData
      });
      return data;
    } catch (error) {
      console.error('Error updating role:', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const deleteRole = async (id) => {
    try {
      loading.value = true;
      await $fetch(`/api/roles/${id}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Error deleting role:', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading: readonly(loading),
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
    fetchRoles,
    createRole,
    updateRole,
    deleteRole
  };
};
