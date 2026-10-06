// Lets a long email wrap after the @ on narrow screens instead of mid-domain
const BreakableEmail = ({ email }) => {
  const [user, domain] = email.split('@')
  return (
    <>
      {user}@<wbr />{domain}
    </>
  )
}

export default BreakableEmail
