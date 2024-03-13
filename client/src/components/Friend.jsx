import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setFriends } from 'state'
import { FlexBetween } from 'components/styled'
import UserImage from './UserImage'
import PropTypes from 'prop-types'

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { _id } = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)
  const friends = useSelector((state) => state.user.friends)

  const { palette } = useTheme()
  const primaryLight = palette.primary.light
  const primaryDark = palette.primary.dark
  const main = palette.neutral.main
  const medium = palette.neutral.medium

  const isSelf = friendId === _id
  // const isFriend = !isSelf && friends?.includes(friendId)
  const isFriend = true

  // console.log(friendId)

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${_id}/${friendId}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )
    const data = await response.json()
    dispatch(setFriends({ friends: data }))
  }

  return (
    <FlexBetween>
      <FlexBetween gap='1rem'>
        <UserImage image={userPicturePath} size='55px' />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`)
            navigate(0) // to force the page to reload whe accessing a friend profile of a friend profile
          }}
        >
          <Typography
            color={main}
            variant='h5'
            fontWeight='500'
            sx={{
              '&:hover': {
                color: palette.primary.light,
                cursor: 'pointer',
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize='0.75rem'>
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>

      {isSelf ? null : (
        <>
          {isFriend ? (
            <IconButton
              onClick={() => patchFriend()}
              sx={{
                backgroundColor: primaryLight,
                p: '0.6rem',
              }}
            >
              <PersonRemoveOutlined sx={{ color: primaryDark }} />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => patchFriend()}
              sx={{
                backgroundColor: primaryLight,
                p: '0.6rem',
              }}
            >
              <PersonAddOutlined sx={{ color: primaryDark }} />
            </IconButton>
          )}
        </>
      )}
    </FlexBetween>
  )
}

Friend.propTypes = {
  friendId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  userPicturePath: PropTypes.string.isRequired,
}

export default Friend
