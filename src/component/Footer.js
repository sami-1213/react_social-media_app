const Footer = () => {
  const day = new Date()
  return (
    <footer className="Footer">
    <h1>Copyright &copy; {day.getFullYear()}</h1>
    </footer>
  )
}
export default Footer