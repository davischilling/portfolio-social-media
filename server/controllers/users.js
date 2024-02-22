import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch(error) {
    res.status(404).json({ error: error.message })
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map((friend) => {
      const {email, password, username, friends, ViewedProfile, Impressions, ...formattedFriend} = friend;
      return formattedFriend;
    });

    res.status(200).json({ friends: formattedFriends });
  } catch(error) {
    res.status(404).json({ error: error.message })
  }
};

export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (!user.friends.includes(friendId)) {
      await user.updateOne({ $push: { friends: friendId } });
      await friend.updateOne({ $push: { friends: id } });
    } else {
      await user.updateOne({ $pull: { friends: friendId } });
      await friend.updateOne({ $pull: { friends: id } });
    }

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map((friend) => {
      const {email, password, username, friends, ViewedProfile, Impressions, ...formattedFriend} = friend;
      return formattedFriend;
    });

    res.status(200).json({ friends: formattedFriends });
  } catch(error) {
    res.status(404).json({ error: error.message })
  }
};
