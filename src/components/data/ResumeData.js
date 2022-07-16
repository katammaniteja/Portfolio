import { DiPython,DiJavascript,DiReact,DiVisualstudio,DiMysql } from "react-icons/di";
import {SiDjango,SiPostman} from "react-icons/si"
import {FaGitAlt} from "react-icons/fa"

const languages = [
    {
      id:1,  
      icon:<DiPython/>,
      name:'Python',
      level:'80'
    },
    {
      id:2,  
      icon:<DiJavascript/>,
      name:'Javascript',
      level:'70'
    },
    {
      id:3,
      icon:<SiDjango/>,
      name:'Django',
      level:'80'
    },
    {
      id:4,
      icon:<DiReact/>,
      name:'Reactjs',
      level:'65'
    },
    {
      id:5,
      icon:<DiMysql/>,
      name:'MySQL',
      level:'50'
    }
]
  
const tools = [
    {
      id:1,
      icon:<DiVisualstudio/>,
      name:'Visual Studio',
      level:'74'
    },
    {
      id:2,
      icon:<SiPostman/>,
      name:'Postman',
      level:'67'
    },
    {
      id:3,
      icon:<FaGitAlt/>,
      name:'Git',
      level:'70'
    }
]

export {languages,tools};