import React from 'react';
import { Grid, Segment, List, Image, Item } from 'semantic-ui-react';


const PeopleDashboard = ({profile}) => {
    return (
        <Grid>
        <Grid.Column width={16}>
            <Segment>
            <List.Item>
                   <Image as='a' size='large' circular src='https://randomuser.me/api/portraits/men/20.jpg' />
                
                   <Item.Content>
                  <Item.Header as='h4'>Bruce, 29 yrs<br></br> Developer, Brisbane</Item.Header>
                </Item.Content>
               </List.Item>
              
            </Segment>
        </Grid.Column>
        <Grid.Column width={16}>
            <Segment>
            <List.Item>
                   <Image as='a' size='large' circular src='https://randomuser.me/api/portraits/women/20.jpg' />
               </List.Item>
               <Item.Content>
                  <Item.Header as='h4'>Sarah, 24 yrs<br></br>Web Designer, Sydney</Item.Header>
                </Item.Content>
            </Segment>
        </Grid.Column>
        <Grid.Column width={16}>
            <Segment>
            <List.Item>
                   <Image as='a' size='large' circular src='https://randomuser.me/api/portraits/men/21.jpg' />
               </List.Item>
               <Item.Content>
                  <Item.Header as='h4'>Alan, 52 yrs<br></br>Security Specialist, Brisbane</Item.Header>
                </Item.Content>
            </Segment>
        </Grid.Column>
        <Grid.Column width={16}>
            <Segment>
            <List.Item>
                   <Image as='a' size='large' circular src='https://randomuser.me/api/portraits/women/21.jpg' />
               </List.Item>
               <Item.Content>
                  <Item.Header as='h4'>Hannah, 21 yrs<br></br>Student, Melbourne</Item.Header>
                </Item.Content>
            </Segment>
        </Grid.Column>
        </Grid>

   


 



               
    )
}

export default PeopleDashboard;
