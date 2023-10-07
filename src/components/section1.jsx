



<div className='col-lg mt-4 mt-lg-0 d-flex  center-within text-center'>
    <ResponsiveContainer aspect={1}>
        <LineChart data={this.state.danceability}>
            <CartesianGrid strokeDasharray="3 3" />
          <XAxis tick={{fontFamily: 'Crimson Pro, serif'}} height={50} label={{fontWeight:700,fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'insideBottom', value: 'Year', fill: 'white'}} stroke="white" dataKey="Year" interval={4}>
          </XAxis>
          <YAxis tick={{fontFamily: 'Crimson Pro, serif'}} width={80} label={{fontWeight:700, fontSize:'130%',fontFamily: 'Crimson Pro, serif', position: 'inside', angle: -90, value: 'Score', fill: 'white'}} stroke="white" />
          <Tooltip contentStyle={{backgroundColor: 'transparent', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} wrapperStyle={{fontFamily: 'Crimson Pro, serif'}} />
          <Legend wrapperStyle={{color: 'white', fontFamily: 'Crimson Pro, serif'}} />
          <Line type="linear" dot={false} dataKey="East Coast" stroke="blue" />
          <Line type="linear" dot={false} dataKey="West Coast" stroke="gray" />
          <Line type="linear" dot={false} dataKey="South" stroke="red" />
          <Line type="linear" dot={false} dataKey="Midwest" stroke="green" />
          <Line type="linear" dot={false} dataKey="Hot 100 Songs" stroke="yellow" />
          <Line type="linear" dot={false} dataKey="All Rap Songs" stroke="pink" />
        </LineChart>
    </ResponsiveContainer>
</div>
