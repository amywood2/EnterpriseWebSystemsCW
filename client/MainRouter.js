import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import Gallery2020 from './user/Gallery2020'
import Gallery2021 from './user/Gallery2021'
import Collections from './core/Collections'

import ViewCactusImage from './core/2020/ViewCactusImage'
import ViewBeeImage from './core/2020/ViewBeeImage'
import ViewCityImage from './core/2020/ViewCityImage'
import ViewFlowerImage from './core/2020/ViewFlowerImage'
import ViewHomeImage from './core/2020/ViewHomeImage'
import ViewIceburgImage from './core/2020/ViewIceburgImage'
import ViewDaisyImage from './core/2020/ViewDaisyImage'
import ViewFieldImage from './core/2020/ViewFieldImage'

import ViewBalloonImage from './core/2021/ViewBalloonImage'
import ViewBirdImage from './core/2021/ViewBirdImage'
import ViewCarrotImage from './core/2021/ViewCarrotImage'
import ViewCatImage from './core/2021/ViewCatImage'
import ViewGirlImage from './core/2021/ViewGirlImage'
import ViewGrapesImage from './core/2021/ViewGrapesImage'
import ViewPaintImage from './core/2021/ViewPaintImage'
import ViewSwimImage from './core/2021/ViewSwimImage'

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
        <PrivateRoute path="/user/gallery2020/:userId" component={Gallery2020}/>
        <PrivateRoute path="/user/gallery2021/:userId" component={Gallery2021}/>
        <PrivateRoute path="/user/collections/:userId" component={Collections}/>

        <PrivateRoute path="/user/landOfCactus/:userId" component={ViewCactusImage}/>
        <PrivateRoute path="/user/QueenBee/:userId" component={ViewBeeImage}/>
        <PrivateRoute path="/user/theCity/:userId" component={ViewCityImage}/>
        <PrivateRoute path="/user/summerBloom/:userId" component={ViewFlowerImage}/>
        <PrivateRoute path="/user/ourHome/:userId" component={ViewHomeImage}/>
        <PrivateRoute path="/user/iceCold/:userId" component={ViewIceburgImage}/>
        <PrivateRoute path="/user/fieldOfDreams/:userId" component={ViewFieldImage}/>
        <PrivateRoute path="/user/daisyField/:userId" component={ViewDaisyImage}/>

        <PrivateRoute path="/user/Airballoon/:userId" component={ViewBalloonImage}/>
        <PrivateRoute path="/user/riverBird/:userId" component={ViewBirdImage}/>
        <PrivateRoute path="/user/freshCarrots/:userId" component={ViewCarrotImage}/>
        <PrivateRoute path="/user/stalkingCat/:userId" component={ViewCatImage}/>
        <PrivateRoute path="/user/Dreaming/:userId" component={ViewGirlImage}/>
        <PrivateRoute path="/user/aBunch/:userId" component={ViewGrapesImage}/>
        <PrivateRoute path="/user/paintingLines/:userId" component={ViewPaintImage}/>
        <PrivateRoute path="/user/swimAndWin/:userId" component={ViewSwimImage}/>

        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
        <Route path="/useradmin/:userId" component={UserAdmin}/>
     </Switch>
    </div>)
}

export default MainRouter
