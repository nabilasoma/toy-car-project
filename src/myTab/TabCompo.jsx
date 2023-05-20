import React, { useEffect, useState } from 'react';

const TabCompo = () => {
    const [currentTab, setCurrentTab] = useState(1);

    useEffect(() => {
        fetch('https://toy-car-server-seven.vercel.app/allToys')
        .then(res => res.json())
        .then(data => {
            setCurrentTab(data)
        })
    }, [])

    console.log("from tabcombo",currentTab);

    return (
        <div>
            tab components
        </div>
    );
};

export default TabCompo;