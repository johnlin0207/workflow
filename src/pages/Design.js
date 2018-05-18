import React, {Component} from 'react'
import Counter from '../components/Counter'
import Draw1 from '../components/Draw1'
import l_1 from '../static/images/l_1.svg'
import l_2 from '../static/images/l_2.svg'
import l_3 from '../static/images/l_3.svg'
import l_4 from '../static/images/l_4.svg'
import l_6 from '../static/images/l_6.svg'
import t_1 from '../static/images/t_1.svg'
import t_2 from '../static/images/l_7.svg'
import t_3 from '../static/images/t_3.svg'
import t_4 from '../static/images/t_4.svg'
import t_5 from '../static/images/t_5.svg'
import t_6 from '../static/images/t_6.svg'
import t_7 from '../static/images/t_7.svg'
import t_8 from '../static/images/t_8.svg'
import t_9 from '../static/images/t_9.svg'
import r_1 from '../static/images/r_1.svg'
import r_4 from '../static/images/r_4.svg'
import r_5 from '../static/images/r_5.svg'


class Design extends Component {

    render() {
        return (
            <div className='design'>
                <div className='left_ctl_bar'>
                    <div className='top'>数据源</div>
                    <div className='ctl_content'>
                        <div className='item'>
                            <div><img src={l_1} alt="定宽文件" title='定宽文件'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={l_2} alt="CSV" title='CSV'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={l_3} alt="JDBC" title='JDBC'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={l_4} alt="" title='inceptor'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={l_2} alt="同步csv" title='同步csv'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={l_6} alt="同步json" title='同步json'/></div>
                        </div>
                    </div>
                </div>
                <div className='top_ctl_bar'>
                    <div className='top_desc'>转换</div>
                    <div className='mid_content'>
                        <div className='item'>
                            <div><img src={t_1} alt="集合" title='集合'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={t_2} alt="除外" title='除外'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={t_3} alt="交集" title='交集'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={t_4} alt="聚合" title='聚合'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={t_5} alt="表过滤" title='表过滤'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={t_6} alt="行限制" title='行限制'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={t_7} alt="列映射" title='列映射'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={t_8} alt="关联" title='关联'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={t_9} alt="过滤" title='过滤'/></div>
                        </div>
                    </div>
                </div>
                <Counter/>
                {/*<div className='panel'>*/}
                    {/*<Draw1/>*/}
                {/*</div>*/}
                <div className='left_ctl_bar right_ctl_bar'>
                    <div className='top target'>目标</div>
                    <div className='ctl_content'>
                        <div className='item'>
                            <div><img src={r_1} alt="文本文件" title='文本文件'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={l_1} alt="定宽文件" title='定宽文件'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={l_2} alt="CSV" title='CSV'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={r_4} alt="JDBC Bunch" title='JDBC Bunch'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={r_5} alt="ORC同步事务表" title='ORC同步事务表'/></div>
                        </div>
                        <div className='item'>
                            <div><img src={l_2} alt="CSV Export" title='CSV Export'/></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Design