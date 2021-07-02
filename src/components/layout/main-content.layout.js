import React from 'react';
import '../assets/css/main.layout.css'

const MainContentLayout = ({children}) => {

    return(
        <main className="main-content">
            {children}
        </main>
           
        
    )
}
export default MainContentLayout;