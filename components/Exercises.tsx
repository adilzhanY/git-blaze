import { auth } from '@/auth';
import React from 'react'

const Exercises = async () => {
    const session = await auth();

    
    return (
        <div>Exercises</div>
    )
}

export default Exercises