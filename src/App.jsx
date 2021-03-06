import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/react'
import image from './images/berlingo.png'
import Menu from './components/Menu'
import Display from './Display'
import Footer from './components/Footer'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

const App = props => {
  return (
    <IonApp>
      <IonHeader align='center' mode="md">
        <IonToolbar color='light'>
          <IonTitle align='center' >
            <img src={image} alt='logo'/>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonHeader>
        <Menu />
      </IonHeader>
      <IonContent>
        <Switch>
          <Route exact path='/' component={Display}></Route>
          <Route exact path={props.categoryName} component={Display}></Route>
        </Switch>
      </IonContent>
      <Footer />
    </IonApp>
  )
}

export default App
