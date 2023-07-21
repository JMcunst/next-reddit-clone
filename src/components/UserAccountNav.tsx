import React from 'react'
import { User } from 'next-auth'

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
    user: Pick<User, 'name' | 'image' | 'email'>
}

export const UserAccountNav = ({ user }: UserAccountNavProps) => {
    return (
        <div>UserAccountNav</div>
    )
}

