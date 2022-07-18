import Drumkits from '../../assets/projects_images/Drumkits.png'
import Weather from '../../assets/projects_images/Weather.png'
import portfolio from '../../assets/projects_images/portfolio.png'
import Ecommerce from '../../assets/projects_images/Ecommerce.jpg'
import Blogger from '../../assets/projects_images/Blogger.png'

const data_projects = [
    {
        name: 'Go Cart',
        image: Ecommerce,
        deployed_url: 'https://mani-ecommerce.herokuapp.com/',
        github_url: 'https://github.com/katammaniteja/Go-Cart',
        category: ['django']
    },

    {
        name: 'Blogger',
        image: Blogger,
        deployed_url: 'https://mani-blogger.herokuapp.com/',
        github_url: 'https://github.com/katammaniteja/Blogger',
        category: ['django']
    },

    {
        name: 'Dev Portfolio',
        image: portfolio,
        deployed_url: 'https://maniteja.netlify.app/',
        github_url: 'https://github.com/katammaniteja/Portfolio',
        category: ['react']
    },

    {
        name: 'Weather App',
        image: Weather,
        deployed_url: 'https://sumit-chat.netlify.app/',
        github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
        category: ['react']
    },

    {
        name: 'Drumkits',
        image: Drumkits,
        deployed_url: 'https://katammaniteja.github.io/Drum-Kits/',
        github_url: 'https://github.com/katammaniteja/Drum-Kits',
        category: ['vanilla']
    }
]

export default data_projects;