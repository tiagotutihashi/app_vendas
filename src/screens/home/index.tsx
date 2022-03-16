import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import ProductBox from "../../components/productBox";
import { useDispatch, useSelector } from "react-redux";
import { productGetRequest } from "../../store/ducks/product/actions";
import { RootSaga } from "../../store/ducks";
import CustomHeader from "../../components/customHeader";
import { RootStackParamList } from "../../navigation/index";

import { Container, LoadingIndicator, ErrorText } from "./styles";

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

const Home = () => {
  const navigation = useNavigation<homeScreenProp>();

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootSaga) => state.reducer,
  );

  useEffect(() => {
    dispatch(productGetRequest());
  }, []);

  const renderProductsList = () => {
    if (loading) {
      return <LoadingIndicator size="large" color="#0000ff" />;
    }

    if (error) {
      return <ErrorText>Erro ao carregar lista de produtos</ErrorText>;
    }

    return (
      <FlatList
        numColumns={2}
        horizontal={false}
        data={data}
        keyExtractor={({ id }) => `${id}-HomeScreenFlatList`}
        renderItem={({ item }) => <ProductBox product={item} />}
      />
    );
  };

  return (
    <Container>
      <CustomHeader />
      {renderProductsList()}
    </Container>
  );
};

export default Home;
