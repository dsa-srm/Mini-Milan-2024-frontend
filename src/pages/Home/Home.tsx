import React from 'react'
import HeroSection from '@/components/HomeComponents/Hero'
import ArtistShowcase from '@/components/HomeComponents/ArtistShowcase'
import artistsData from '../../data/artistData.ts';
import './home.css';

const Home = () => {
    return (
        <div className='bodybg'>
            
            <HeroSection/>
            {artistsData.map((artist: { name: string; imageUrl: string; }, index: React.Key | null | undefined) => (
                <ArtistShowcase key={index} name={artist.name} imageUrl={artist.imageUrl} />
            ))}
        </div>
    )
}

export default Home;
