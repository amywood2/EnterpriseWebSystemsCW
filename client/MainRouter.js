import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import Gallery from './user/Gallery'
import Collections from './core/Collections'
import ViewCactusImage from './core/ViewCactusImage'
import ViewBeeImage from './core/ViewBeeImage'
import ViewCityImage from './core/ViewCityImage'
import ViewFlowerImage from './core/ViewFlowerImage'
import ViewHomeImage from './core/ViewHomeImage'
import ViewIceburgImage from './core/ViewIceburgImage'
import ViewDaisyImage from './core/ViewDaisyImage'
import ViewFieldImage from './core/ViewFieldImage'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import UserAdmin from './user/UsersAdmin'
import Menu from './core/Menu'


const MainRouter = () => {
    return (<div>
    <Menu/>
	  <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <PrivateRoute path="/user/gallery/:userId" component={Gallery}/>
        <PrivateRoute path="/user/collections/:userId" component={Collections}/>
        <PrivateRoute path="/user/landOfCactus/:userId" component={ViewCactusImage}/>
        <PrivateRoute path="/user/QueenBee/:userId" component={ViewBeeImage}/>
        <PrivateRoute path="/user/theCity/:userId" component={ViewCityImage}/>
        <PrivateRoute path="/user/summerBloom/:userId" component={ViewFlowerImage}/>
        <PrivateRoute path="/user/ourHome/:userId" component={ViewHomeImage}/>
        <PrivateRoute path="/user/iceCold/:userId" component={ViewIceburgImage}/>
        <PrivateRoute path="/user/fieldOfDreams/:userId" component={ViewFieldImage}/>
        <PrivateRoute path="/user/daisyField/:userId" component={ViewDaisyImage}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
        <Route path="/useradmin/:userId" component={UserAdmin}/>
     </Switch>
    </div>)
}

export default MainRouter
