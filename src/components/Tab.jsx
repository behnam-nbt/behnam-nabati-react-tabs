import React, { useState,useEffect } from 'react';
import styles from './Tab.module.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(() => {
        const savedTab = localStorage.getItem('activeTab');
        return savedTab !== null ? parseInt(savedTab, 10) : 0;
    });

  const tabs = [
    { label: 'Tab 1', content: <TabContent1 /> },
    { label: 'Tab 2', content: <TabContent2 /> },
    { label: 'Tab 3', content: <TabContent3 /> },
    { label: 'Tab 4', content: <TabContent4 /> },
    { label: 'Tab 5', content: <TabContent5 /> },
  ];

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
}, [activeTab]);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${index === activeTab ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent} key={activeTab}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

const TabContent1 = () => <div>Content for Tab 1</div>;
const TabContent2 = () => <div>Content for Tab 2</div>;
const TabContent3 = () => <div>Content for Tab 3</div>;
const TabContent4 = () => <div>Content for Tab 4</div>;
const TabContent5 = () => <div>Content for Tab 5</div>;

export default Tabs;
