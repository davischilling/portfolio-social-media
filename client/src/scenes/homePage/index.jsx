import { Box, useMediaQuery } from '@mui/material'
import Navbar from 'components/Navbar'
import UserWidget from 'components/widgets/UserWidget'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const isNonMobileScreen = useMediaQuery('(min-width: 1000px)')
  const { _id, picturePath } = useSelector((state) => state.user)
  console.log(picturePath)
  return (
    <Box>
      <Navbar />
      <Box
        width='100%'
        padding='2rem 6%'
        display={isNonMobileScreen ? 'flex' : 'block'}
        gap='0.5rem'
        justifyContent='space-between'
      >
        <Box flexBasis={isNonMobileScreen ? '26%' : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreen ? '42%' : undefined}
          mt={isNonMobileScreen ? undefined : '2rem'}
        ></Box>
        {isNonMobileScreen && <Box flexBasis='26%'></Box>}
      </Box>
    </Box>
  )
}

export default HomePage
