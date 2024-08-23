export interface AuthSenseiUser {
  id: string;
  name?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
}

export interface Session {
  user: AuthSenseiUser;
  expires: number;
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
}

export interface AuthResult {
  user: AuthSenseiUser;
  account: Account;
}

export type OAuthProvider = 'google' | 'github';

export interface SignInOptions {
  email: string;
  password: string;
}

export interface SignUpOptions {
  email: string;
  password: string;
  name?: string;
}

export interface AuthSenseiConfig {
  providers: OAuthProvider[];
  database: any; // Replace with actual database adapter type
  secret: string;
}

export interface AuthSenseiContextType {
  user: AuthSenseiUser | null;
  signIn: (options: SignInOptions) => Promise<AuthSenseiUser | null>;
  signUp: (options: SignUpOptions) => Promise<AuthSenseiUser | null>;
  signOut: () => Promise<void>;
  loading: boolean;
}
