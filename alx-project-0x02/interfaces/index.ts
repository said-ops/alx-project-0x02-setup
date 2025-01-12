export interface CardProps {
    title: string;
    content: string;
  }
  

// ButtonProps
export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
}


export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

//  UserProps
export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}
