import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Example
This is an example markdown code and the resulting page that it outputs. You switch between both to get familiar with writing Markdown. 

<Tabs>
  <TabItem value="code" label="Code">
    ```markdown
    import Tabs from '@theme/Tabs';
    import TabItem from '@theme/TabItem';

    # Example base post

    ![Pic](/img/placeholder.jpg)

    <Tabs>
      <TabItem value="about" label="Description">
        Here can go a short description of the base.
      </TabItem>
      <TabItem value="coords" label="Coords" default>
        | X     | Y     | Z     | 
        | ----- | ----- | ----- |
        | 42    | 69    | -42   |
      </TabItem>
      <TabItem value="ncooords" label="Nether Directions">
        The portals are directly linked with the nether hub.
      </TabItem>
      <TabItem value="builders" label="Builders">
        - Albert Einstein
        - Neil Armstrong
        - Friedrich Nietzsche
        - Steve
      </TabItem>
      <TabItem value="date" label="Date Finished">
        04/07/2024
      </TabItem>
    </Tabs>

    ## Lore and Tales

    Some lore. Who doesn't like to write some lore? 😃 *italic* **bold** __underline__. `Ever needed code too`?

    ### A smaller headline

    #### An even smaller one

    - A list
    - more list

    You can also add pictures anywhere in the lore. You may also add more sections if you see fit. It doesn't really matter. Your base, your post! 💪

    ## Build Process

    Maybe you can describe how you built it. What you enjoyed most. Or you just don't include this section at all or replace it with another. Your choice! 💯 Of course you can also complement your descriptions with pictures of your progression if you want to.

    ## Additional Pictures

    You can add more pictures here if you have good ones. People love pictures! 🤩 Adding images is a little bit more involved since the GitHub website doesn't allow you to easily upload images. So if you want to add images to your page, just add the template image as below and send BuildingBrute your real images. He will handle the rest.
    ```markdown
    ![Pic](/img/placeholder.jpg)
    ```

    ![Pic](/img/placeholder.jpg)

    ![Pic](/img/placeholder.jpg)

    ![Pic](/img/placeholder.jpg)
    ```
  </TabItem>
  <TabItem value="output" label="Output" default>
    # Example base post

    ![Pic](/img/placeholder.jpg)

    <Tabs>
      <TabItem value="about" label="Description">
        Here can go a short description of the base.
      </TabItem>
      <TabItem value="coords" label="Coords" default>
        | X     | Y     | Z     | 
        | ----- | ----- | ----- |
        | 42    | 69    | -42   |
      </TabItem>
      <TabItem value="ncooords" label="Nether Directions">
        The portals are directly linked with the nether hub.
      </TabItem>
      <TabItem value="builders" label="Builders">
        - Albert Einstein
        - Neil Armstrong
        - Friedrich Nietzsche
        - Steve
      </TabItem>
      <TabItem value="date" label="Date Finished">
        04/07/2024
      </TabItem>
    </Tabs>

    ## Lore and Tales

    Some lore. Who doesn't like to write some lore? 😃 *italic* **bold** ~line through~. `Ever needed code too`?

    ### A smaller headline

    #### An even smaller one

    - A list
    - more list

    You can also add pictures anywhere in the lore. You may also add more sections if you see fit. It doesn't really matter. Your base, your post! 💪

    ## Build Process

    Maybe you can describe how you built it. What you enjoyed most. Or you just don't include this section at all or replace it with another. Your choice! 💯 Of course you can also complement your descriptions with pictures of your progression if you want to.

    ## Additional Pictures

    You can add more pictures here if you have good ones. People love pictures! 🤩 Adding images is a little bit more involved since the GitHub website doesn't allow you to easily upload images. So if you want to add images to your page, just add the template image as below and send BuildingBrute your real images. He will handle the rest.
    ```markdown
    ![Pic](/img/placeholder.jpg)
    ```

    ![Pic](/img/placeholder.jpg)

    ![Pic](/img/placeholder.jpg)

    ![Pic](/img/placeholder.jpg)
  </TabItem>
</Tabs>