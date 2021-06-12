import Proptypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: Proptypes.string
}

// css in js
// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }
export default Header;