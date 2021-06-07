
// Add this import
import Head from 'next/head'
import Date from '../../components/date'

// export default function Post({ postData }) {
  // return (
    // <Layout>
      // {/* Add this <Head> tag */}
      // <Head>
        // <title>{postData.title}</title>
      // </Head>

      // {/* Keep the existing code here */}
    // </Layout>
  // )
// }





// Add this import


// export default function Post({ postData }) {
  // return (
    // <Layout>
      // {/* Keep the existing code here */}

      // {/* Replace {postData.date} with this */}
      // <Date dateString={postData.date} />

      // {/* Keep the existing code here */}
    // </Layout>
  // )
// }


import Layout from '../../components/layout'

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}



export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}


// export default function Post() {
  // return <Layout>...</Layout>
// }




// Add this import
//import Date from '../../components/date'






// Add this import at the top of the file
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}