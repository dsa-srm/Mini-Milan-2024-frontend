import React from 'react'
import HeroSection from '@/components/HomeComponents/Hero'
import ArtistShowcase2 from '@/components/HomeComponents/ArtistShowcase2.tsx'
import artistsData from '../../data/artistData.ts';
import AboutMiniMilan from '@/components/HomeComponents/AboutMiniMilan.tsx';
import './homebg.css';

const Home = () => {
    return (
        <div className='bodybg'>
            
            <HeroSection/>
            {artistsData.map((artist: { name: string; imageUrl: string; bottomimageUrl: string; }, index: React.Key | null | undefined) => (
                <ArtistShowcase2 key={index} name={artist.name} imageUrl={artist.imageUrl} bottomimageUrl={artist.bottomimageUrl} />
    
            ))}
            <AboutMiniMilan/>     
                
        
            

        </div>
    )
}

export default Home;
