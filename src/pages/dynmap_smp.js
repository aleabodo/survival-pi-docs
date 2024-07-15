import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Dynmap SMP" 
        noFooter={true}
        description="Dynmap SMP">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 60px)',
          fontSize: '20px',
          backgroundColor: 'pink'
        }}>
         <iframe src="https://map.survival-pi.com" height="100%" width="100%"></iframe> 
      </div>
    </Layout>
  );
}