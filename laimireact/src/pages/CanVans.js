import React, {useRef,useEffect} from 'react';

const Canvas = () => {
  const canU = useRef(null);
  useEffect(() => {
    const ctx = canU.current.getContext('2d');
    ctx.fillStyle = 'green'
    ctx.fillRect(100, 100, 200, 50)
    // 100， 100 是xy轴坐标， 200 50 是长宽
   },[])
  return <>
    <canvas height='400' width="400" id='canU' ref={ canU }></canvas>
    </>;
};

export default Canvas;
