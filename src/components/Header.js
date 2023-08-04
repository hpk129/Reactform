
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className='header'>
        {/* <h1 style={{color: 'red', backgroundColor:
         'black'}}>{title}</h1>  */}
        <h1> Task manager</h1>
        <Button color= {showAdd ? 'red':'green'} text={showAdd ? 'Close':'Add'} onClick={onAdd}/>
      
    </header>
  )
}
//default properties for when we don't pass props
Header.defaultProps = {
    title: 'Task Tracker',
}
//use to catch error before it happens
Header.propTypes = {
    title: PropTypes.string.isRequired ,
}
//css in JS
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
} //now pass this heading in the single {} inline
export default Header
