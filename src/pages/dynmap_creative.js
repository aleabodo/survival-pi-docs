import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Dynmap Creative" 
        noFooter={true}
        description="Dynmap Creative">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 60px)',
          fontSize: '20px',
          backgroundColor: 'black'
        }}>
         <iframe src="https://cmap.survival-pi.com" height="100%" width="100%"></iframe> 
      </div>
    </Layout>
  );
}