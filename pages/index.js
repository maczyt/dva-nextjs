import Link from 'next/link'
import dva from 'dva';
import appStyle from 'todomvc-app-css/index.css'
import Head from '../components/head'
import Foot from '../components/foot'
import Header from '../components/header'
import ItemList from '../components/itemList'
import Footer from '../components/footer'

export default () => {
  const app = dva()
  app.model(require('../models/item').default)
  app.router(() => {
    return (
      <div>
        <style global jsx>
          {appStyle}
        </style>
        <Head title="Todomvc app" /> 
        <section className="todoapp">
          <Header />
          <ItemList />
          <Footer />
        </section>
        <Foot />
      </div>
    )
  })
  const Cmp = app.start()
  return <Cmp />
};
