import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from './ContextAPI'

const Submenu = () => {
  const { isSubmenuOpen, page: { page, links }, location, } = useGlobalContext()
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [page,location, links])

  return (
    <aside className={`${isSubmenuOpen ? 'submenu show-submenu' : 'submenu'}`} ref={container}>
      <section>
        <h4>{page}</h4>
        {links.map((link, index) => {
          const { label, icon, url } = link
          return (
            <a href={url}>
              <span>{icon}</span>
              <span>{label}</span>
            </a>
          )
        })}
      </section>
      submenu
    </aside>
  )
}

export default Submenu