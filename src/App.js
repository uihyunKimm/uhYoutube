import React, {Suspense,lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/contents/section/Header';
import Main from './components/contents/section/Main';

const Home = lazy(()=>import('./components/pages/Home'));
const Today  = lazy(()=>import('./components/pages/Today'));
const Developer  = lazy(()=>import('./components/pages/Developer'));
const Webd  = lazy(()=>import('./components/pages/Webd'));
const Website  = lazy(()=>import('./components/pages/Website'));
const Gsap  = lazy(()=>import('./components/pages/Gsap'));
const Port  = lazy(()=>import('./components/pages/Port'));
const Youtube  = lazy(()=>import('./components/pages/Youtube'));
const Channel  = lazy(()=>import('./components/contents/Channel'));
const Video  = lazy(()=>import('./components/contents/Video'));
const Search  = lazy(()=>import('./components/pages/Search'));
const Not  = lazy(()=>import('./components/pages/Not'));

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback={<Main/>}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route index={true} path='/' element={<Home  />} /> */}
                    <Route path='/today' element={<Today />} />
                    <Route path='/developer' element={<Developer />} />
                    <Route path='/webd' element={<Webd />} />
                    <Route path='/website' element={<Website />} />
                    <Route path='/gsap' element={<Gsap />} />
                    <Route path='/port' element={<Port />} />
                    <Route path='/youtube' element={<Youtube />} />
                    <Route path='/channel/:channelId' element={<Channel />} />
                    <Route path='/video/:videoId' element={<Video />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path='*' element={<Not />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App;