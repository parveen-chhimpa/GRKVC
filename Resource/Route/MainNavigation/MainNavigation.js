import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash_Screen from '../../Pages/Splash_Screen/Splash_Screen';
import DashBoardScreen from '../../Pages/DashBoardScreen/DashBoardScreen';
import SignIn from '../../Pages/SignIn/SignIn';
import StudentDashBoard from '../../Pages/StudentDeshBoard/StudentDashBoard';
import Download from '../../Pages/Download/Download';
import Profile from '../../Pages/Profile/Profile';
import QrScaner from '../../Pages/QrScaner/QrScaner';
import MenuContent from '../../Pages/MenuContent/MenuContent';
import Accountancy from '../../Pages/BrouseSubject/Accountancy/Accountancy';
import MyGroups from '../../Pages/MyGroups/MyGroups';
import Biological from '../../Pages/BrouseSubject/Accountancy/Biological';
import ART from '../../Pages/BrouseSubject/Accountancy/ART';
import Bussness from '../../Pages/BrouseSubject/Bussness';
import Notification from '../../Pages/Notification/Notification';
import Course from '../../Pages/StudentDeshBoard/BrouseCourse/Course';
import DigitalText from '../../Pages/StudentDeshBoard/BrouseCourse/DigitalText';
import AllSubject from '../../Pages/BrouseSubject/AllSubject';
import RecentlyCourse from '../../Pages/StudentDeshBoard/RecentlyCourse/RecentlyCourse';
import TeacherDashBoard from '../../Pages/TeacherDashBoard/TeacherDashBoard';
import TeacherProfile from '../../Pages/TeacherDashBoard/TeacherProfile';
import TeacherDownloadScreen from '../../Pages/TeacherDashBoard/TeacherDownloadScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function MainNavigation() {

  const MenuNavigation = ()=>{
    return(
      <Drawer.Navigator drawerContent={props=><MenuContent {...props} />}>
      <Drawer.Screen name="Student" component={StudentDashBoard} options={{headerShown:false}}/>
    </Drawer.Navigator>
    )
  }

  // const TeacherMenu = ()=>{
  //   <Drawer.Navigator drawerContent={props=><MenuContent {...props} />}>
  //   <Drawer.Screen name="Teacher" component={TeacherDashBoard} options={{headerShown:false}}/>
  // </Drawer.Navigator>
  // }
  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Splash_Screen" 
        component={Splash_Screen}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="DashBoard" 
        component={DashBoardScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Sign_In" 
        component={SignIn}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Student" 
        component={MenuNavigation}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Download" 
        component={Download}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Profile" 
        component={Profile}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="QR" 
        component={QrScaner}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Accountancy" 
        component={Accountancy}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="My_Groups" 
        component={MyGroups}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="BIO" 
        component={Biological}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="ART" 
        component={ART}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Bussness" 
        component={Bussness}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Notification" 
        component={Notification}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Course" 
        component={Course}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Digital" 
        component={DigitalText}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="All" 
        component={AllSubject}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Recently" 
        component={RecentlyCourse}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Teacher" 
        component={TeacherDashBoard}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Teacher_Profile" 
        component={TeacherProfile}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="Teacher_Download" 
        component={TeacherDownloadScreen}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}