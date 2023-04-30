import { sendMail } from '../middlewares/sendMail.js'
import { User } from '../model/User.js'
import Jwt from 'jsonwebtoken'
import cloudinary from 'cloudinary'

// login
export const login = (async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email, password })
    //   if user not found
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      })
    }

    //   if user found then send authentication token
    const token = Jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

    res.status(200).cookie("token", token, {
      expires: new Date(Date.now() + 10000000)
    }).json({
      success: true,
      message: "Login successfull...",
    })

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,

    })
  }
})

// logout
export const logout = (async (req, res) => {
  try {
    res.status(200).cookie("token", null, {
      expires: new Date(Date.now())
    }).json({
      success: true,
      message: "Logout succesfull..."
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
})

// getuser
export const getUser = async (req, res) => {
  try {
    const user = await User.findOne().select("-password -email")
    res.status(200).json({ success: true, user })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }

}
// profile
export const myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    res.status(200).json({ success: true, user })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }

}

// contact
export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const userMessage = `Hey I'm ${name}. My Email is ${email}. My message is : ${message} `

    await sendMail(userMessage);
    return res.status(200).json({
      success: true,
      message: "Message send succesfully"
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

//update 
export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { name, email, password, skills, about } = req.body
    if (name) {
      user.name = name;
    }
    if (password) {
      user.password = password;
    }
    if (email) {
      user.email = email;
    }
    if (skills) {
      if (skills.image1) {
        // if (user.skills.image1) {
        //   await cloudinary.v2.uploader.destroy(user.skills.image1.public_id)
        // }
        // const mycloud = await cloudinary.v2.uploader.upload(skills.image1, {
        //   folder: "portfolio"
        // })
        user.skills.image1.url = null
        user.skills.image1 = {
          // public_id: mycloud.public_id,
          url: skills.image1
        }
      }
      if (skills.image2) {
        // if (user.skills.image2) {
        //   await cloudinary.v2.uploader.destroy(user.skills.image2.public_id)
        // }
        // const mycloud = await cloudinary.v2.uploader.upload(skills.image2, {
        //   folder: "portfolio"
        // })
        user.skills.image2.url = null
        user.skills.image2 = {
          // public_id: mycloud.public_id,
          url: skills.image2
        }
      }
      if (skills.image3) {
        // if (user.skills.image3) {
        //   await cloudinary.v2.uploader.destroy(user.skills.image3.public_id)
        // }
        // const mycloud = await cloudinary.v2.uploader.upload(skills.image3, {
        //   folder: "portfolio"
        // })
        user.skills.image3.url = null
        user.skills.image3 = {
          // public_id: mycloud.public_id,
          url: skills.image3
        }
      }
      if (skills.image4) {
        // if (user.skills.image4) {
        //   await cloudinary.v2.uploader.destroy(user.skills.image4.public_id)
        // }
        // const mycloud = await cloudinary.v2.uploader.upload(skills.image4, {
        //   folder: "portfolio"
        // })
        user.skills.image4.url = null
        user.skills.image4 = {
          // public_id: mycloud.public_id,
          url: skills.image4
        }
      }
      if (skills.image5) {
        // if (user.skills.image5) {
        //   await cloudinary.v2.uploader.destroy(user.skills.image5.public_id)
        // }
        // const mycloud = await cloudinary.v2.uploader.upload(skills.image5, {
        //   folder: "portfolio"
        // })
        user.skills.image5.url = null
        user.skills.image5 = {
          // public_id: mycloud.public_id,
          url: skills.image5
        }
      }
      if (skills.image6) {
        // if (user.skills.image6) {
        //   await cloudinary.v2.uploader.destroy(user.skills.image6.public_id)
        // }
        // const mycloud = await cloudinary.v2.uploader.upload(skills.image6, {
        //   folder: "portfolio"
        // })
        user.skills.image6.url = null
        user.skills.image6 = {
          // public_id: mycloud.public_id,
          url: skills.image6
        }
      }
    }
    if (about) {
      if (about.name) {
        user.about.name = about.name
      }
      if (about.title) {
        user.about.title = about.title
      }
      if (about.subtitle) {
        user.about.subtitle = about.subtitle
      }
      if (about.description) {
        user.about.description = about.description
      }
      if (about.qoute) {
        user.about.qoute = about.qoute
      }
      if (about.Avatar) {
        // await cloudinary.v2.uploader.destroy(user.about.Avatar.public_id)
        // const mycloud = await cloudinary.v2.uploader.upload(about.Avatar, {
        //   folder: "portfolio"
        // });
        user.about.url = null
        user.about.Avatar = {
          // public_id: about.Avatar,
          url: about.Avatar
        }
      }
    }
    await user.save()
    res.status(200).json({ success: true, message: "Updated succesfully" })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

// timeline
export const addTimeline = async (req, res) => {
  try {
    const { title, description, date } = req.body
    const user = await User.findById(req.user._id)
    user.timeline.unshift({
      title,
      description,
      date
    })
    await user.save()
    res.status(200).json({
      message: 'Timeline updated successfully'
    })
  }
  catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }

}

// projects
export const addProject = async (req, res) => {
  try {
    const { url, title, image, description, techstack } = req.body

    const user = await User.findById(req.user._id)
    // const mycloud = await cloudinary.v2.uploader.upload(image, {
    //   folder: "samples/portfolio"
    // }).then((result)=>console.log(result)).catch(err=>console.log(err))
    user.projects.unshift({
      url,
      title,
      image: {
        // public_id: mycloud.public_id,
        url: image
      },
      description,
      techstack
    })
    await user.save()
    res.status(200).json({
      message: 'Project added successfully'
    })
  }
  catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }

}

// deletetimeline
export const deleteTimeline = async (req, res) => {
  try {
    const { id } = req.params

    const user = await User.findById(req.user._id)

    user.timeline = user.timeline.filter((item) => item._id != id)
    await user.save()
    res.status(200).json({
      message: 'Deleted from Timeline'
    })
  }
  catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }

}

// deleteproject
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params

    const user = await User.findById(req.user._id)

    // const project = user.projects.filter((item) => item._id === id)

    // await cloudinary.v2.uploader.destroy(project.image.public_id)
    user.projects = user.projects.filter((item) => item._id != id)

    await user.save()
    res.status(200).json({
      message: 'Deleted from Timeline'
    })
  }
  catch (error) {
    console.log(error)
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

