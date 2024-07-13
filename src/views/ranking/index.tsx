import { memo } from "react"
import type { ReactNode, FC } from "react"
import { RankingWrapper } from "./style"

interface IProps {
    children?: ReactNode
}

const Ranking: FC<IProps> = () => {
    return (
        <RankingWrapper>
            <div className="filter">
                <div className="item">新歌</div>
                <div className="item">原创</div>
                <div className="item">飙升</div>
            </div>
            <div className="content">

            </div>
        </RankingWrapper>
    )
}

export default memo(Ranking)
