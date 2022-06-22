import React from 'react'
import sublinks from './data'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './ContextAPI'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <aside className={`${isSidebarOpen?'sidebar show-sidebar':'sidebar'}`}>
      <div className="sidebar-container">
        <button className="sidebar-header" onClick={closeSidebar}>
          <FaTimes size={25} />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item
            return (
              <div key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { label, icon, url } = link
                    return (
                      <a key={index} href={url}>
                        <span>{icon}</span><span>{label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar