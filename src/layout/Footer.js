export default function Footer() {
  return (
    <nav className="navbar fixed-bottom  navbar-expand-sm navbar-dark bg-light">
      <div className="container-fluid text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </nav>
  )
}