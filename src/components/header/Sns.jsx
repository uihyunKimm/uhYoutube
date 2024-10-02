import { snsLink } from '../../data/header'

const Sns = () => {
    return (
        <div className='fixed bottom-0 left-0 right-0 w-64 text-center pl-0 pr-4 py-2 backdrop-blur-[8px]'>
            <ul>
                {snsLink.map((sns, key) => (
                    <li key={key} className='inline-block'>
                        <a 
                            href={sns.url} 
                            target='_black' 
                            rel='noopener noreferrer' 
                            aria-label={sns.title}
                            className='inline-block py-2 px-2 hover:bg-white/5 group'
                        >
                            <span className='group-hover:text-primary'>{sns.icon}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sns