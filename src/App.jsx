import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App (){
const format = (userName) => `@${userName}`

    return(
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName="midudev" 
                name="Miguel Angel Durán"
            />

            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName="pheralb" 
                name="Pablo Hernandez"
            />
           
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing={false} 
                userName="vxnder" 
                name="Vanderhart"
            />
        </section>
    )
}