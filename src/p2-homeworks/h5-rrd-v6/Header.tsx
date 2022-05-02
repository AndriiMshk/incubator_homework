import React from 'react';
import { NavLink, Outlet, Route, Routes, useParams } from 'react-router-dom';

function Header() {

  const params = useParams<'id'>()
  const some = params.id // хуй поймешь что это тоже
  return (
    <div>
      <NavLink to={'/'}> START </NavLink>
      <NavLink to={'/1'}> 1 </NavLink>
      <NavLink to={'/2'}> 2 </NavLink>
      <NavLink to={'/3'}> 3 </NavLink>
      <Routes>
        <Route path={'/'} element={<div>START</div>} />
        <Route path={'/1'} element={<div>1 ##</div>} />
        <Route path={':id'} element={<div>--- id</div>} />
        <Route index element={<div>choose id</div>} />
        <Route path={'/2'} element={
          <div>
            # 2 #
            <Outlet />
          </div>}
        >
          <Route path={'/2/3'} element={<div>## 3</div>} />
        </Route>
        <Route path={'/*'} element={<div>404</div>} />
      </Routes>
{/*2-3 нихуя не работает */}
    </div>
  );
}

export default Header;
