import React from 'react'
import { Link } from 'gatsby'
//import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      isVisible: false,
      fromTop: 0,
      windowHeight: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = () => {
    
    const scrolled = window.pageYOffset;

    this.setState({
      fromTop: scrolled,
      windowHeight: window.innerHeight,
    })
  };
  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className={"navbar is-fixed-top is-transparent" + (this.state.fromTop > this.state.windowHeight ? ' visible':'')}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Firany na wymiar" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                O nas
              </Link>
              <Link className="navbar-item" to="/products">
                Produkty
              </Link>
              <Link className="navbar-item" to="/blog">
                Realizacje
              </Link>
              <Link className="navbar-item" to="/contact">
                Kontakt
              </Link>
             {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>*/}
            </div>
            <div className="navbar-end has-text-centered">
              <span
                className="navbar-item"
              >
                tel: +48 500 600 700
              </span>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
