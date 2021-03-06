import styled from "styled-components";
import {ContentHorizontalPadding, ContentLength, DesktopMiniWidth} from "../../constvars";


export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  padding: 15px;
  padding-top: 30px;
  @media (min-width: ${DesktopMiniWidth}px){
    width: 70%;
  }
  @media (max-width: ${DesktopMiniWidth}px){
    width:100%;
  }
  .banner-img {
    width: 625px;
    height: 270px;
  }
  background-color: white; 
`;

export const HomeRight = styled.div`
  width: 28%;
  @media (max-width: ${DesktopMiniWidth}px){
    display: none;
  }
  background-color: white; 
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  :first{
    padding-top:5px;
  }
  border-bottom: 1px solid #dcdcdc;
  width: 100%;
  
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 98%;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    max-width: 98%;
    text-overflow:ellipsis;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
    text-overflow:ellipsis;
    height:50px;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`;

export const TagWrapper = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items:center;
  margin-top: 1px;
  border-width: 10px;
  width:100%;
`

export const TagItem =styled.div`
  font-size: 13px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;

  background-color:white;

  padding: 3px;
  margin-right: 15px;
  margin-bottom:15px;
  text-align:center;
  cursor:pointer;
  
  &:hover {
    color: cadetblue;
  }
`
