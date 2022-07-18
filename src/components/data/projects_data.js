import Drumkits from '../../assets/projects_images/Drumkits.png'
import Weather from '../../assets/projects_images/Weather.png'
import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.png'
import new_year from '../../assets/projects_images/new_year.jpg'
import color_classification from '../../assets/projects_images/color_classification.jpg'
import blinking from '../../assets/projects_images/blinking.JPG'
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
    },

    {
        name: 'Shop Website',
        image: hardware_store,
        deployed_url: '!#',
        category: ['html_css', 'vanilla']
    },

    

    {
        name: 'Bengali New Year',
        image: new_year,
        deployed_url: 'https://dey-sumit.github.io/NewYear/',
        category: ['vanilla']
    },

    {
        name: 'Color Classification using tf.js',
        image: color_classification,
        deployed_url: '!#',
        github_url: 'https://github.com/Dey-Sumit/color-classification',
        category: ['node', 'machine_learning']
    },

    {
        name: 'Blinking bubbles',
        image: blinking,
        deployed_url: 'https://dey-sumit.github.io/Blinking_Bubbles/',
        github_url: 'https://github.com/Dey-Sumit/Blinking_Bubbles',
        category: ['processing']
    }
]

export default data_projects;