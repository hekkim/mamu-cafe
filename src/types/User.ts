export type AuthUser = {
  user_info: {
    password: string;
    last_login: null;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: string;
    id: number;
    points: number;
    groups: any;
    user_permissions: any;
  };
  refresh: string;
  access: string;
};
