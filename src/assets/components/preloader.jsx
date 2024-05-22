
import { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../../animations'


export default function Preloader(){
    useEffect(()=>{
        preLoaderAnim()
    },[]);
    return(
        
        <>
            <div className="preloader">
                <div className="texts-container">
                    <span>Photo,</span>
                    <span>Video,</span>
                    <span>Vibes</span>
                </div>
            </div>
        </>
    )
}